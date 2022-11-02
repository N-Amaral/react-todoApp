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
          <button className="rounded-full bg-slate-100 outline outline-white w-20" type="submit">
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
          <button className="rounded-full bg-slate-100 outline outline-white w-20" type="submit">
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
          <button className="rounded-full bg-slate-100 outline outline-white w-20 " type="submit">
            Save
          </button>
        </form>
      </span>
    </div>
  );
};

//Component for each to-do
const ListItem = (props: { content: { textValue: string; dateValue: string }; id: number; delete: Function; edit: Function; save: Function }) => {
  const memoValue = useMemo(() => props.content, [props.content]);
  return (
    <li className="todoListItem m-2 p-2 bg-slate-300 rounded drop-shadow-lg outline outline-slate-200 hover:bg-slate-600" id={`${props.id}`}>
      <textarea className="readTodoText" cols={20} rows={5} disabled value={memoValue.textValue}></textarea>
      <input type="date" className="readTodoDate" disabled value={memoValue.dateValue} />
      <ListItemBtns id={props.id} delete={props.delete} edit={props.edit} save={props.save} />
    </li>
  );
};

//Component with all to-dos
const List = (props: { content: Array<Object>; handleDelete: Function; handleEdit: Function; handleSave: Function }) => {
  const memoList = useMemo(() => props.content, [props.content]);

  useEffect(() => {
    const list: NodeListOf<HTMLUListElement> = document.querySelectorAll("ul");
    console.log(list[0].children);
  });

  const content: any[] = [];
  memoList.forEach((item: any, i) => {
    content.push(<ListItem content={item} id={i} key={i} delete={props.handleDelete} edit={props.handleEdit} save={props.handleSave} />);
  });
  return <ul className="m-3 p-2 bg-yellow-400 flex flex-wrap flex-auto flex-row overflow-y-auto h-auto w-auto justify-center">{content}</ul>;
};

export default List;
