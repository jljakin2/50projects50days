const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  // set the initial value of counter when the page is loaded
  counter.innerText = "0";

  // update the count
  const updateCounter = () => {
    /**
     * 1. get the target amount from the data attribute
     * 2. turn the target amount and the inner text amount to a number type
     * 3. set the increment based on how fast you want the counter to count to target. higher the num = slower the count because the increment value is less
     * 4. as long as the count hasn't reached the target, keep incrementing the count by the increment value every second
     * 5. when the count equals the target, just show the target
     */
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 300;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  // call the initial count update
  updateCounter();
});
