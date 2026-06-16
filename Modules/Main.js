
// Default import
import UserCard from './UserCard.js';

// Named imports
import { add, mul } from './math.js';

// Alias import
import { add as plus } from './math.js';

// Namespace import
import * as MathUtils from './math.js';

// Use default export
const user = { name: "Anusha", age: 25 };
console.log(UserCard(user));

// Use named imports
console.log("Add:", add(2, 3));
console.log("Multiply:", mul(3, 4));

// Use alias
console.log("Plus:", plus(5, 5));

// Use namespace
console.log("Namespace Add:", MathUtils.add(10, 20));
console.log("Namespace Sub:", MathUtils.sub(10, 5));