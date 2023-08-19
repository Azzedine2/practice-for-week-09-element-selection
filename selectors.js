const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seed = document.querySelectorAll(".seed");
  console.log(`seed: ${seed}`);

  // 2. Get all seedless fruit elements
  // Your code here
  const seedless = document.querySelectorAll(".seedless");
  console.log(`seedless: ${seedless}`);

  // 3. Get first seedless fruit element
  // Your code here
  console.log(seedless[0]);

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const span = document.querySelector("span");
  console.log(`Span adress: ${span}`);

  // 5. Get all children of element "wrapper"
  // Your code here
  const childs = document.querySelector("#wrapper").children;

  console.log(`Children: ${childs}`);

  // 6. Get all list items in the list`)
  const items = document.querySelector(`ol`).children;
  console.log(`Items: ${items}`);

  // 6. Get all odd number list items in the list
  // Your code here
  const odd = document.querySelectorAll(".odd");
  console.log(`Odd: ${odd}`);

  // 7. Get all even number list items in the list
  // Your code here
  const even = document.querySelectorAll("ol li:nth-child(even");
  console.log(`Even: ${even}`);

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const liWithoutClass = document.querySelectorAll("#three ul li:not([class])");
  console.log(`Without Class: ${liWithoutClass}`);

  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.querySelector(".shopping");
  console.log(`Amazon: ${amazon}`);

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
};

window.onload = select;
