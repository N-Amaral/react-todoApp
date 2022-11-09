// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useMemo } from "react";

//Component for btns in each to-do
const ListItemBtns = (props: { status: boolean }) => {
  return (
    <div className="flex flex-row">
      <span className="mr-1 ml-1 h-2/3 w-min">
        <button className="mt-2 mb-2 p-1 bg-red-600 rounded hover:bg-blue-800  h-min w-min" type="submit" value={"delete"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </span>
      <span className="mr-1 ml-1">
        <button className="mt-2 mb-2 p-1 bg-white rounded hover:bg-blue-800   h-min w-min" value={"edit"} type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg>
        </button>
      </span>
      <span className="mr-1 ml-1 hidden">
        <button className="mt-2 mb-2 p-1 bg-white rounded hover:bg-blue-800  h-min w-min" value={"save"} type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zm10.857 5.691a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </span>
      <span className="mr-1 ml-1">
        <button
          className={`mt-2 mb-2 p-1 rounded hover:bg-blue-800  h-min w-min ${props.status ? "bg-green-500" : "bg-yellow-300 "}`}
          value={"toggle"}
          type="submit"
        >
          {props.status ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </span>
    </div>
  );
};

//Component for each to-do
const ListItem = (props: {
  content: { textValue: string; dateValue: string; createdOn: string; completed: boolean };
  id: number;
  delete: Function;
  edit: Function;
  save: Function;
  toggle: Function;
}) => {
  return (
    <li
      className="todoListItem m-2 p-2 bg-slate-300 rounded drop-shadow-lg  bg-gradient-to-br from-white via-purple-400 to-blue-600 grid w-1/2 h-2/3 "
      id={`${props.id}`}
    >
      <span className="font-mono font-bold text-xl pr-1 pl-1 mr-1 ml-1">Created on : {props.content.createdOn}</span>
      <form
        className="overflow-x-auto ..."
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
            case "toggle":
              props.toggle(props.id);
              break;
          }
        }}
      >
        <div className="bg-white rounded  min-w-max min-h-max">
          <span className="textDisplay font-mono text-xl ">{props.content.textValue}</span>
          <input type="text" defaultValue={props.content.textValue} disabled className="hidden editForm border rounded w-full h-min font-mono text-xl" />
        </div>
        <div className="bg-white rounded min-w-max max-w-max">
          <span className="font-mono text-xl">{props.content.dateValue}</span>
        </div>
        <ListItemBtns status={props.content.completed} />
      </form>
    </li>
  );
};

//Component with all to-dos
const List = (props: { content: Array<Object>; handleDelete: Function; handleEdit: Function; handleSave: Function; handleToggle: Function }) => {
  const memoList = useMemo(() => props.content, [props.content]);

  const content: any[] = [];
  memoList.forEach((item: any, i) => {
    content.push(
      <ListItem content={item} id={i} key={i} delete={props.handleDelete} edit={props.handleEdit} save={props.handleSave} toggle={props.handleToggle} />
    );
  });
  return <ul className="m-3 p-2 flex flex-wrap flex-auto flex-row overflow-y-auto h-auto w-auto justify-center">{content}</ul>;
};

export default List;
