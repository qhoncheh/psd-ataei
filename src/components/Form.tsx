const Form = () => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Input 1"
        className="w-full  px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Input 2"
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
};

export { Form };
