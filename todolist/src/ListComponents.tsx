// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useMemo } from "react";

//Component for btns in each to-do
const ListItemBtns = (props: { id: number; delete: Function; edit: Function; save: Function }) => {
  return (
    <div className="flex flex-row">
      <span className="pr-1 pl-1 mr-1 ml-1">
        <form
          action=""
          method="GET"
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            props.delete(props.id);
          }}
        >
          <button className="mt-2 mb-2 mr-1 ml-1 rounded-full bg-slate-100 hover:bg-blue-800 outline outline-white w-20" type="submit">
            Delete
          </button>
        </form>
      </span>
      <span className="pr-1 pl-1 mr-1 ml-1">
        <form
          action=""
          method="GET"
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            props.edit(props.id);
          }}
        >
          <button className="mt-2 mb-2 mr-1 ml-1 rounded-full bg-slate-100  hover:bg-blue-800  outline outline-white w-20" type="submit">
            Edit
          </button>
        </form>
      </span>
      <span className="pr-1 pl-1 mr-1 ml-1 hidden">
        <form
          action=""
          method="GET"
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            props.save(props.id);
          }}
        >
          <button className="rounded-full mt-2 mb-2 mr-1 ml-1 bg-slate-100 hover:bg-blue-800 outline outline-white w-20" type="submit">
            Save
          </button>
        </form>
      </span>
    </div>
  );
};

//Component for each to-do
const ListItem = (props: {
  content: { textValue: string; dateValue: string; createdOn: string };
  id: number;
  delete: Function;
  edit: Function;
  save: Function;
}) => {
  const memoValue = useMemo(() => props.content, [props.content]);
  return (
    <li
      className="todoListItem m-2 p-2 bg-slate-300 rounded drop-shadow-lg outline outline-slate-200 bg-gradient-to-br from-white via-purple-400 to-blue-600 grid "
      id={`${props.id}`}
    >
      <span className="font-mono font-bold text-xl pr-1 pl-1 mr-1 ml-1">Created on : {props.content.createdOn}</span>
      <textarea className="readTodoText font-mono " cols={20} rows={5} disabled placeholder={memoValue.textValue}></textarea>
      <input
        type="text"
        className="readTodoDate w-3/5 font-mono "
        disabled
        placeholder={memoValue.dateValue}
        onFocus={(e) => {
          e.target.type = "date";
        }}
        onBlur={(e) => {
          e.target.type = "text";
        }}
      />
      <ListItemBtns id={props.id} delete={props.delete} edit={props.edit} save={props.save} />
    </li>
  );
};

//Component with all to-dos
const List = (props: { content: Array<Object>; handleDelete: Function; handleEdit: Function; handleSave: Function }) => {
  const memoList = useMemo(() => props.content, [props.content]);

  const content: any[] = [];
  memoList.forEach((item: any, i) => {
    content.push(<ListItem content={item} id={i} key={i} delete={props.handleDelete} edit={props.handleEdit} save={props.handleSave} />);
  });
  return <ul className="m-3 p-2 flex flex-wrap flex-auto flex-row overflow-y-auto h-auto w-auto justify-start">{content}</ul>;
};

export default List;
