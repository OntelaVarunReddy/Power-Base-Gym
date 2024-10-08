let join=document.querySelector(".btn");
join.addEventListener("click",()=>{
    let train=prompt("please select training(cardio/strength/personal.T) :");
    let plan=prompt("please select plan(monthly/quaterly/half-yearly/yearly) :");
    let joining=prompt("please enter joining date: ");
    if(train=="cardio" && plan=="monthly")
    {
        let type=prompt("please select type(trainer/without trainer) :");
        if(type=="trainer"){
            let amount=prompt("please enter amount 2000/- :");
            if(amount==2000){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
        else{
            let amount=prompt("please enter amount 1500/- :");
            if(amount==1500){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
    }
    else if(train=="cardio" && plan=="quaterly")
    {
        let type=prompt("please select type(trainer/without trainer) :");
        if(type=="trainer"){
            let amount=prompt("please enter amount 5500/- :");
            if(amount==5500){
            alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
        else{
            let amount=prompt("please enter amount 4000/- :");
            if(amount==4000){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
    }
    else if(train=="cardio" && plan=="half-yearly")
    {
        let type=prompt("please select type(trainer/without trainer) :");
        if(type=="trainer"){
            let amount=prompt("please enter amount 8500/- :");
            if(amount==8500){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
        else{
            let amount=prompt("please enter amount 7000/- :");
            if(amount==7000){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
    }
    else if(train=="cardio" && plan=="yearly")
    {
        let type=prompt("please select type(trainer/without trainer) :");
        if(type=="trainer"){
            let amount=prompt("please enter amount 11000/- :");
            if(amount==11000){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
        else{
            let amount=prompt("please enter amount 9000/- :");
            if(amount==9000){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
    }
    else if(train=="strength" && plan=="monthly")
    {
        let type=prompt("please select type(trainer/without trainer) :");
        if(type=="trainer"){
            let amount=prompt("please enter amount 1500/- :");
            if(amount==1500){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
        else{
            let amount=prompt("please enter amount 1000/- :");
            if(amount==1000){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
    }
    else if(train=="strength" && plan=="quaterly")
    {
        let type=prompt("please select type(trainer/without trainer) :");
        if(type=="trainer"){
            let amount=prompt("please enter amount 3500/- :");
            if(amount==3500){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
        else{
            let amount=prompt("please enter amount 2500/- :");
            if(amount==2500){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
    }
    else if(train=="strength" && plan=="half-yearly")
    {
        let type=prompt("please select type(trainer/without trainer) :");
        if(type=="trainer"){
            let amount=prompt("please enter amount 5500/- :");
            if(amount==5500){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
        else{
            let amount=prompt("please enter amount 4500/- :");
            if(amount==4500){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
    }
    else if(train=="strength" && plan=="yearly")
    {
        let type=prompt("please select type(trainer/without trainer) :");
        if(type=="trainer"){
            let amount=prompt("please enter amount 8500/- :");
            if(amount==8500){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
        else{
            let amount=prompt("please enter amount 7000/- :");
            if(amount==7000){
                alert(`joining successful on ${joining}`);
            }
            else{
                alert("invalid amount");
            }
        }
    }
    else if(train=="personal.T" && plan=="monthly")
    {
        let amount=prompt("please enter amount 4000/- :");
        if(amount==4000){
            alert(`joining successful on ${joining}`);
        }
        else{
            alert("invalid amount");
        }
    }
    else if(train=="personal.T" && plan=="quaterly")
    {
        let amount=prompt("please enter amount 10000/- :");
        if(amount==10000){
            alert(`joining successful on ${joining}`);
        }
        else{
            alert("invalid amount");
        }
    }
    else if(train=="personal.T" && plan=="half-yearly")
    {
        let amount=prompt("please enter amount 18000/- :");
        if(amount==18000){
            alert(`joining successful on ${joining}`);
        }
        else{
            alert("invalid amount");
        }
    }
    else{
        alert("invalid plan");
    }
})