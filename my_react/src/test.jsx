
import { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 120",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 200",
    complete: false,
  },
];

const reducer = (state,action) => {

    
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
       // console.log(todo.id+'==='+action.id);
       

      if (todo.id === action.id) {
        if(!todo.complete){
          console.log(!todo.complete);
          return { ...todo, complete: !todo.complete,title:'test' };
        }else{

          let  a="Todo 120";
          return { ...todo, complete: !todo.complete,title:a};

        }
    
          
        } else {
          
          return  todo;
        }
      });
    default:
      return todo;
  }
};

function Todos() {
  const [date, setDate] = useState(new Date());
  const [todos,dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {

     dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
export default Todos
