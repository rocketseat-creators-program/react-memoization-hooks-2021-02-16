export const FabButton = (props) => (
  <button
    onClick={() => props.setTotalLikes(props.totalLikes + 1)}
    className="float-btn tracking-wider text-white bg-gray-500 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold"
  >
    <i className="fas fa-heart" aria-hidden="true"></i>
  </button>
);
