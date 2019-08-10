// GOOD...BEST PRACTICE
const { data, loading, error } = useQuery(SOME_QUERY, {
  variables: {
    variable1: "0"
  }
});
//check for loading and error to await your data
if (loading) return <p>Loading...</p>;
if (error) return <p>Error...</p>;
// If it gets here, it means you have  data
const { fileName } = data.dataFromQuery;

//====================================================================================

// BAD ... THIS WILL THROW ERROR
const { data, loading, error } = useQuery(SOME_QUERY, {
  variables: {
    variable1: "0"
  }
});
const { fileName } = data.dataArrayQuery;

//==================================================================================
// The "error" is because you were not checking for "loading state";
// The loading helps you to wait for your data.Recall that query is asynchronous. But if you don't specify it, "fileName" at line 21 will be null (because it's still making network request), which  will break your code.

//The error state at line 9 helps you to manage errors.
