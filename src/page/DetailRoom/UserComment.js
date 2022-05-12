import React, { createElement, useEffect, useState } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhGiaAction,
  taoDanhGiaAction,
} from "../../redux/action/DanhGiaAction";
import { Pagination } from "antd";
export default function UserComment({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhGiaAction(id));
  }, []);
  const { danhGia } = useSelector((state) => {
    return state.DanhGiaReducer;
  });
  const { dangNhap } = useSelector((state) => {
    return state.localStorageReducer;
  });
  console.log(dangNhap);
  const { updateUserAvatar } = useSelector((state) => {
    return state.dsNguoiDungPhanTrangReducer;
  });
  console.log(updateUserAvatar);
  console.log(danhGia);
  const [comment, setComment] = useState({
    content: "",
  });
  const handleChange = (e) => {
    let userComment = e.target.value;
    setComment({
      content: userComment,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    const data = comment;
    dispatch(taoDanhGiaAction(id, data));
  };
  const newDangNhap = dangNhap?.name;
  const newDanhGia = danhGia?.map((item) => {
    return { ...item, newDangNhap, updateUserAvatar };
  });
  console.log(newDanhGia);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };
  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };
  const numEachPage = 4;
  const [pagination, setPagination] = useState({
    minValue: 0,
    maxValue: 4,
  });
  const handlePagination = (value) => {
    setPagination({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
  };
  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  const renderComment = () => {
    return (
      <>
        {newDanhGia &&
          newDanhGia.length > 0 &&
          newDanhGia
            .slice(pagination.minValue, pagination.maxValue)
            .map((item) => {
              return (
                <Comment
                  actions={actions}
                  author={<a>{item.newDangNhap}</a>}
                  avatar={<Avatar src={item.updateUserAvatar} alt="Han Solo" />}
                  content={<p>{item.content}</p>}
                  datetime={
                    <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                      <span>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                />
              );
            })}
        <Pagination
          defaultCurrent={1}
          defaultPageSize={numEachPage} //default size of page
          onChange={handlePagination}
          total={newDanhGia.length} //total number of card data available
        />
      </>
    );
  };
  return (
    <div>
      <div className="flex mx-auto items-center justify-center shadow-lg mt-10 ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a new comment
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                onChange={handleChange}
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
              />
            </div>
            <div className="w-full md:w-full flex items-start md:w-full px-3">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                <svg
                  fill="none"
                  className="w-5 h-5 text-gray-600 mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="-mr-1">
                <input
                  type="submit"
                  className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  defaultValue="Post Comment"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
        {renderComment()}
      </div>
    </div>
  );
}
