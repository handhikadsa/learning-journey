const getWordFile = async (wordType: string) =>
  await (
    await fetch(
      (process.env.NODE_ENV === "production" ? 
        "<https://words-aas.vercel.app/db/>" : "<http://localhost:3000/db/>") + wordType
    )
  ).text();