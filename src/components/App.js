    import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
    const initialItems=[
      {id:1, description:"passports",quantity:2,packed:true},
    {id:2,description:"tickets",quantity:12,packed:false},
      
    ];

    export default function App(){

      const [items,setItems]=useState([]);

    function HandleAddItems(item){
      setItems((items)=>[...items,item]);
    }

    function Handledelitem(id){
      setItems((items)=>items.filter((item)=> item.id!==id));
    }

    function Handletogitem(id){
      setItems((items)=>items.map((item)=>item.id ===id ?{...item ,packed:!item.packed}:item));
    }

    return(
      <div className="app">
        <Logo/>
        <Form onAddItems={HandleAddItems}/>
        <PackingList items={items}onDeleteItems={Handledelitem} ontoggleitem={Handletogitem}/>
        <Stats items={items}/>
        </div>
    );
    }

