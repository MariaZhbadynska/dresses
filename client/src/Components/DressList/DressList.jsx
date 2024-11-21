import { useDispatch, useSelector } from "react-redux";
import { fetchDresses } from "../../store/dressesSlice";
import DressCard from "../Dress/Dress";

const DressList = () => {
  const dispatch = useDispatch();
  const dresses = useSelector((state) => state.dresses.data);

  useEffect(() => {
    dispatch(fetchDresses());
  }, [dispatch]);

  return (
    <div className="dress-list">
        <div class="row">
      {dresses.map((dress) => (
        <DressCard key={dress._id} dress={dress} />
      ))}
      </div>
    </div>
  );
};

export default DressList();
