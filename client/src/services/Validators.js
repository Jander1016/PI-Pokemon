function Validators(input) {
    const customRegEx={
        chars:/^[a-zA-Z]+$/g,
        numbers: /^[1-9][0-9]?$|^100$/g,
        imgRegex: /^https?:\/\/.+\.(jpg|jpeg|png|gif|svg)$/,
      }
      

        let error = {};
        if (!input.name) {
          error.name = "Name is required";
        } else if (!customRegEx.chars.test(input.name)) {
          error.name = "Name is invalid";
        }
        return error;

}

export default Validators