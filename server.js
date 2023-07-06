const express = require("express");
const app = express();
const port = 4001;
//const recipes = require("./recipes");

const recipes = [
  {
    id: 1,
    title: "Macarons",
    category: ["Dessert", "Cookie"],
    preparation: "100",
    img: "https://preppykitchen.com/wp-content/uploads/2020/04/French-Macarons-feature-1200.jpg",
    desc: " This easy French macaron recipe makes a batch of the most dainty, delicate, and delicious cookies that will float right into your mouth and disappear.",
    instructions: [
      "Wipe down a large glass or metal mixing bowl with lemon juice or vinegar. Add egg whites. Cover and refrigerate for 24 hours, then bring to room temperature.",
      "Line 3 large baking sheets with silicone baking mats or parchment paper. Set aside.",
      "Add cream of tartar and extract (if using) to egg whites. Using a handheld mixer or stand mixer fitted with a whisk attachment, beat together on medium speed until very soft peaks form. This takes a few minutes of beating. At first the egg white and cream of tartar mixture will be foamy, then the bubbles will begin to tighten and the beaters will leave tracks as the egg whites build volume. Once they begin leaving tracks, you likely have soft peaks. Stop beating. Add about 1/3 of the superfine sugar. Beat on medium-high speed for 5 seconds, then with the mixer continuing to run, add another 1/3 of the sugar. Beat for 5 seconds, then with the mixer continuing to run, add the remaining sugar. Beat on medium-high speed until stiff glossy peaks form. (This means the whites have stiff, smooth, and sharp points in the bowl or on the lifted whisk attachment/beaters. Stiff peaks do not droop down. You can turn the bowl upside down and the egg whites will not move or spill out.) Using a rubber spatula, slowly and gently fold the food coloring (if using) into the egg whites.",
      "Sift the almond flour and confectioners’ sugar together in a large glass or metal mixing bowl. Use a spoon to help work any larger pieces through the sieve. You don’t want to discard a lot of that because then you won’t have enough dry ingredients in the batter.",
      "Slowly fold the beaten egg whites into the almond flour mixture in 3 separate additions, folding until combined before adding the next addition. After you add all of the egg whites, pay very close attention to the consistency of your macaron batter. Continue folding the batter (which deflates air) until it thins out into the consistency of honey. What’s a more helpful cue is the figure 8 test. Drop the macaron batter off of your spatula in the form of a figure 8. The figure 8 should take no more than 10 seconds to sink back into itself. If it takes less, your batter was overmixed and is too thin. If it takes longer, continue slowly folding the batter to deflate more air, then perform the figure 8 test again. It’s best to go very slow so you don’t accidentally overmix.",
      "Spoon the macaron batter into a piping bag fitted with a medium round piping tip, such as Wilton 12, Wilton 1A, or even Ateco 806. The macaron batter is very drippy, so transferring to the piping bag can be messy.",
      "Holding the piping bag at a 90 degree angle over the baking sheet, pipe batter in 1.5 – 2 inch rounds about 1-2 inches apart on prepared baking sheets. I usually pipe little mounds—see video tutorial above. The piped macaron batter flattens out. Bang the pan a couple times on the counter to pop any air bubbles, then use a toothpick to pop any remaining air bubbles.",
      "Let the piped macarons sit out until they are dry and no longer tacky on top, usually 30-60 minutes. This time allows the top to firm up and form a skin, which helps the macarons rise UP and form their trademark ruffly “feet.” Do not let them sit out for longer than they need to because they could begin to deflate.",
      "Meanwhile, preheat the oven to 325°F (163°C).",
      "Bake for 13 minutes. As the macaron shells bake, they should form feet. To test for doneness, lightly touch the top of a macaron with a spoon or your finger (careful, it’s hot). If the macaron seems wobbly, it’s not done and needs another 1-2 minutes. If it seems set, it’s done. Basically, bake until the macarons don’t move around when touched.",
      "Let the shells cool on the baking sheet for 15 minutes, then transfer to a cooling rack to continue cooling. The macaron shells may stick to the parchment paper/baking sheet if you try to remove them too early. If this is happening, let them cool on the baking sheet a little longer before removing.",
      "After cooling, the shells are ready to fill and sandwich together. I have plenty of filling suggestions in the recipe notes below. You can spread filling with a knife or pipe it using the same round tip you used for the macaron batter.",
      "You can eat right away or, as some professionals prefer, cover and refrigerate them 12-24 hours so the macarons and flavors can mature. Bring to room temperature before serving. (I usually just serve them right away!)",
      "Cover leftover macarons and refrigerate for up to 5 days.",
    ],
    ingredients: [
      "100g egg whites (usually between 3–4 large egg whites)",
      "1/4 teaspoon (1g) cream of tartar",
      "1/2 teaspoon extract such as vanilla, almond, coconut, etc. (optional)",
      "80g superfine sugar (aka caster sugar, see note)",
      "1–2 drops gel food coloring (optional)",
      "125g almond flour",
      "125g confectioners' sugar",
      "desired macaron filling",
    ],
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    category: ["Lunch", "Dinner"],
    preparation: "50",
    img: "https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg?crop=0.683xw:1.00xh;0.221xw,0&resize=1200:*",
    desc: "You’ve been itching for a change recently. You know, something to spice things up and throw a spanner into the monotony of routine. Enter: chicken tikka masala. Sure, it might take two days to throw together, but when you pair it with some fluffy steamed rice or buttery, garlic naan, it’s well worth the wait.",
    instructions: "",
    ingredients: "",
  },
  {
    id: 3,
    title: "Avocado Toast with Egg",
    category: ["Breakfast"],
    preparation: "15",
    img: "https://www.skinnytaste.com/wp-content/uploads/2015/01/Avocado-Toast-with-Egg-8.jpg",
    desc: "This healthy, avocado toast recipe is made on whole grain toast with mashed avocado, and your favorite egg. You can make this with a hard boiled egg, sunny side up, scrambled, or poached. If you’re like me, you make even want to add a few dashes of hot sauce! Adding egg to avocado toast is an easy way to add protein to breakfast toast. If you want a vegan option, you might also like this avocado toast with lemon and kale.",
    instructions: "",
    ingredients: "",
  },
  {
    id: 4,
    title: "Avocado Lox Toast",
    category: ["Lunch"],
    preparation: "15",
    img: "https://www.seriouseats.com/thmb/lVZskabVRdVqcJIUeD3OJlD-mI0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160502-avocado-toast-vicky-wasik-salmon-8-a7a4152ebdf3456a9df61ee9dd1179d6.jpg",
    desc: "This bagel-and-lox-inspired open-faced sandwich combines avocado and smoked salmon, cut through with tomatoes, capers, and thinly sliced rounds of red onion. Goat cheese takes the place of cream cheese for extra tang, while a squeeze of lemon juice and a little fresh black pepper bring everything into balance.",
    instructions: "",
    ingredients: "",
  },
  {
    id: 5,
    title: "Creamy Zucchini Pasta",
    category: ["Lunch"],
    preparation: "40",
    img: "https://www.simplyrecipes.com/thmb/eQL0hGoHyjkeIeOvfT7Am75JWm8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Creamy-One-Pot-Pasta-with-Zucchini-LEAD-7-871d64f3fd8a40189c29c7b8d1afdac4.jpg",
    desc: "The beauty of this recipe is that it all goes down in one pot. After the zucchini is caramelized, you’ll cook the pasta with cream cheese in just enough water for the pasta to cook without being left with a pool of liquid. If all the moisture cooks off and the pasta is still undercooked, you can always add an extra splash of water. The cooked zucchini is then added back to the pot, along with some lemon juice and zest, and you’ve got yourself a hearty bowl of summertime pasta. ",
    instructions: [],
    ingredients: [],
  },
  {
    id: 6,
    title: "Perfect Burger?",
    category: ["Lunch", "Dinner"],
    preparation: "45",
    img: "https://i0.wp.com/www.aspicyperspective.com/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-17.jpg?resize=650%2C975&ssl=1",
    desc: "These burgers offer a rich and meaty taste, with a punch of zesty herbs that can be customized with your preferred flavors. A few simple key ingredients help to consistently create juicy hamburger patties, no matter which cooking method you prefer.",
    instructions: "",
    ingredients: "",
  },
];

//Implement the middleware so we can access the data passed
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${res.originalUrl}`);
  next();
});

app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`Request: ${req.method} ${req.originalUrl} ${req.statusCode}`);
  });
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Learning how to create CRUD Apps");
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const recipeId = parseInt(req.params.id, 10);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  if (recipe) {
    res.send(recipe);
  } else {
    res.status(404).send({ message: "Recipe not found" });
  }
});

app.post("/recipes", (req, res) => {
  const newRecipe = req.body;
  recipes.push(newRecipe);
  res.status(201).send(newRecipe);
});

app.patch("/recipes/:id", (req, res) => {
  const recipeId = parseInt(req.params.id, 10);
  const recipeUpdates = req.body;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
  const updatedRecipe = { ...recipes[recipeIndex], ...recipeUpdates };
  if (recipeIndex !== -1) {
    recipes[recipeIndex] = updatedRecipe;
    res.send(updatedRecipe);
  } else {
    res.status(404).send({ message: "Recipe not found" });
  }
});

app.delete("/recipes/:id", (req, res) => {
  const recipeId = parseInt(req.params.id, 10);
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
  if (recipeIndex !== -1) {
    recipes.splice(recipeIndex, 1);
    res.status(204).send({ message: "Recipe deleted successfully" });
  } else {
    res.status(404).send({ message: "Recipe not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
