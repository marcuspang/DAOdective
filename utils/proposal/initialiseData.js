export const initialiseData = (uniqueChoices, votes) => {
  const data = [];
  for (let i = 1; i <= uniqueChoices; ++i) {
    data.push({ amt: 0 });
  }
  votes.forEach((vote) => {
    data[vote.choice - 1].amt += vote.vp;
  });
  return data;
};
