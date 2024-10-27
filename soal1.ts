type Person = {
  firstName: string;
  lastName: string;
};

const getFullName = (person: Person): string => {
  return person.firstName.concat(" ", person.lastName);
};

console.log(getFullName({ firstName: "daniel", lastName: "sitohang" }));

export {};
