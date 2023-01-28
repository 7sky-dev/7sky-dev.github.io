function add(){
    // task
        let task = document.querySelector("#task_name").value;
        if(task==""){
            
        }else{
            task = document.createTextNode(task);
            let task_div = document.createElement("div");
        

                let newTask = document.createElement("div");
                newTask.className = "d-flex flex-row justify-content-center align-items-center";

                task_div.appendChild(task);
                newTask.appendChild(task_div);


                let identificator = new Date();
                identificator = identificator.getTime();

                newTask.id=identificator;


            // button

            let button_div = document.createElement("div");

                let button = document.createElement("button");
                button.className = "btn btn-danger";
                button.appendChild(document.createTextNode("X"));
                button.className = "btn btn-danger dismiss";
                button.value=identificator;

                button_div.className = "ms-auto";

                button_div.appendChild(button);
                newTask.appendChild(button_div);


            // adding task to the list
                let taskOutput = document.querySelector(".list");
                taskOutput.appendChild(newTask);

            document.querySelector("#task_name").value="";
        }
        
}