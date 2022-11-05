// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useMemo } from "react";

//Component for btns in each to-do
const ListItemBtns = () => {
  return (
    <div className="flex flex-row">
      <span className="pr-1 pl-1 mr-1 ml-1">
        <button className="mt-2 mb-2 mr-1 ml-1 rounded-full bg-slate-100 hover:bg-blue-800 outline outline-white w-20" type="submit" value={"delete"}>
          Delete
        </button>
      </span>
      <span className="pr-1 pl-1 mr-1 ml-1">
        <button className="mt-2 mb-2 mr-1 ml-1 rounded-full bg-slate-100  hover:bg-blue-800  outline outline-white w-20" value={"edit"} type="submit">
          Edit
        </button>
      </span>
      <span className="pr-1 pl-1 mr-1 ml-1 hidden">
        <button className="rounded-full mt-2 mb-2 mr-1 ml-1 bg-slate-100 hover:bg-blue-800 outline outline-white w-20" value={"save"} type="submit">
          Save
        </button>
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
  handleChange: Function;
}) => {
  const memoValue = useMemo(() => props.content, [props.content]);
  return (
    <li
      className="todoListItem m-2 p-2 bg-slate-300 rounded drop-shadow-lg outline outline-slate-200 bg-gradient-to-br from-white via-purple-400 to-blue-600 grid "
      id={`${props.id}`}
    >
      <span className="font-mono font-bold text-xl pr-1 pl-1 mr-1 ml-1">Created on : {props.content.createdOn}</span>
      <form
        action=""
        method="GET"
        onSubmit={(event: any) => {
          const submitter = event.nativeEvent.submitter.value;
          event.preventDefault();
          event.stopPropagation();
          switch (submitter) {
            case "delete":
              props.delete(props.id);
              break;
            case "edit":
              props.edit(props.id);
              break;
            case "save":
              props.save(props.id);
              break;
          }
        }}
      >
        <textarea
          className="readTodoText font-mono "
          cols={20}
          rows={5}
          disabled
          onChange={(event) => props.handleChange(event, props.id)}
          value={memoValue.textValue}
        ></textarea>
        <input
          type="text"
          className="readTodoDate w-3/5 font-mono "
          disabled
          value={memoValue.dateValue}
          onFocus={(e) => {
            e.target.type = "date";
          }}
          onBlur={(e) => {
            e.target.type = "text";
          }}
        />
        <ListItemBtns />
      </form>
    </li>
  );
};

//Component with all to-dos
const List = (props: { content: Array<Object>; handleDelete: Function; handleEdit: Function; handleSave: Function; handleChange: Function }) => {
  const memoList = useMemo(() => props.content, [props.content]);

  const content: any[] = [];
  memoList.forEach((item: any, i) => {
    content.push(
      <ListItem content={item} id={i} key={i} delete={props.handleDelete} edit={props.handleEdit} save={props.handleSave} handleChange={props.handleChange} />
    );
  });
  return <ul className="m-3 p-2 flex flex-wrap flex-auto flex-row overflow-y-auto h-auto w-auto justify-start">{content}</ul>;
};

export default List;
