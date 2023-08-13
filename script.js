const elevator = document.querySelector('.elevator');
const door = document.querySelector('.door');

function goToFloor(floor){
    const floorHeight = 100; 
    const translation = (floor - 1) * floorHeight;
    
    openDoor();
    
    setTimeout(() => {
        elevator.style.transform = `translateY(-${translation}px)`;
        closeDoor();
    }, 1000); 
}

function openDoor() {
    door.style.width = '50px';
}

function closeDoor() {
    door.style.width = '0';
}