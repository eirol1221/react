function hoisting(cond) {
  if (cond) {
    const x = 1;
    foo(x);
  }

  const x = 2;
  foo(x);
}

export const FIXTURE_ENTRYPOINT = {
  fn: hoisting,
  params: [false],
  isComponent: false,
};
