export const useUser = () => {
  const user = {
    name: 'Max M',
    email: '',
  };

  const setUser = (data) => {
    console.log('input', { data });
  };

  return { user, setUser };
};
