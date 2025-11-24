// ---------------- PART A ----------------
if (true) {
  let x = 10;      // block-scoped
  var y = 20;      // function/global scoped
}

console.log("y:", y); // 20

try {
  console.log("x:", x); // will throw ReferenceError
} catch (err) {
  console.log("Accessing x throws:", err.name + " - " + err.message);
}

// ---------------- PART B ----------------
const profile = {
  user: {
    details: {
      email: "test@mail.com"
      // phone is missing on purpose
    }
  }
};

// The question says: PRINT these two ↓
// 1) profile.user.details.email
// 2) profile.user.details.phone (should NOT throw error)

// Using optional chaining for safe access
console.log("profile.user.details.email:", profile.user?.details?.email);
console.log("profile.user.details.phone:", profile.user?.details?.phone); // undefined (NO ERROR)

// ---------------- PART C ----------------
const brokenProfile = {}; // missing everything

// Optional chaining prevents runtime error
console.log("Safe access example:", brokenProfile.user?.details?.email); // undefined
