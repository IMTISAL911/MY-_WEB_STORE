// mock login API (fake server)

export function loginApi({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simple validation like a real backend
      if (!email || !password) {
        reject({ message: "Missing credentials" });
      } else {
        resolve({
          success: true,
          user: {
            email,
            name: "Mock User",
            token: "fake-jwt-token-123",
          },
        });
      }
    }, 1500); // fake server delay
  });
}
