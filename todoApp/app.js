function add(){
    // task
        let task = document.querySelector("#task_name").value;
        if(task==""){
            
        }else{
            task = document.createTextNode(task);
        

                let newTask = document.createElement("div");
                newTask.className = "d-flex flex-row";

        
    
                newTask.appendChild(task);


                let identificator = new Date();
                identificator = identificator.getTime();

                newTask.id=identificator;


            // button

            let button_div = document.createElement("div");

                let button = document.createElement("button");
                button.className = "btn btn-danger";
                button.appendChild(document.createTextNode("X"));

                button_div.appendChild(button);
                newTask.appendChild(button_div);


            // adding task to the list
                let taskOutput = document.querySelector(".list");
                taskOutput.appendChild(newTask);

            document.querySelector("#task_name").value="";
        }
        
}