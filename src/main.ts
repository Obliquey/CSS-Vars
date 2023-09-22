const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.controls input');

const handleUpdate = (input: HTMLInputElement): any => {
    console.log(input);
}

for(let something of inputs){
    handleUpdate(something);
}
