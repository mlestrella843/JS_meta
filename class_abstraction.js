class Car {
    #engineStarted = false;

    // Public method to start the car
    startCar() {
        this.#engineStarted = true;
        console.log('Car has started.');
    }

    // Public method to stop the car
    stopCar() {
        this.#engineStarted = false;
        console.log('Car has stopped.');
    }
}

const myCar = new Car();
myCar.startCar();  // Output: Car has started.
myCar.stopCar();   // Output: Car has stopped.
