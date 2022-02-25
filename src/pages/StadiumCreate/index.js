import { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import MyInput from "../../components/myInput";

function StadiumCreate() {
  const [titleInp, setTitleInp] = useState("");
  const [capacityInp, setCapacityInp] = useState();
  const [locationInp, setLocationInp] = useState();
  const [openedInp, setOpenedInp] = useState();
  const [priceInp, setPriceInp] = useState();
  const [ratingInp, setRatingInp ] = useState();
  const [imageInp, setimageInp] = useState();
  
  
  

  const onCreate = (e) => {
    e.preventDefault();
    console.log(titleInp + " " + capacityInp + " " + locationInp + " " + openedInp + " " + priceInp + " " + ratingInp);
  };

  return (
    <Layout>
      <form className=" max-w-3xl mx-auto shadow border p-8 space-y-8">
        <MyInput
          labelText={"Title"}
          myValue={titleInp}
          mySetValueChange={setTitleInp}
          type={"text"}
        />
        <MyInput
          labelText={"Capacity"}
          myValue={capacityInp}
          mySetValueChange={setCapacityInp}
          type={"number"}
        />
        <MyInput
          labelText={"Location"}
          myValue={locationInp}
          mySetValueChange={setLocationInp}
          type={"text"}
        />
         <MyInput
          labelText={"Opened"}
          myValue={openedInp}
          mySetValueChange={setOpenedInp}

        />

        <MyInput
          labelText={"Price"}
          myValue={priceInp}
          mySetValueChange={setPriceInp}
          type={"number"}
        />
        <MyInput
          labelText={"Rating"}
          myValue={ratingInp}
          mySetValueChange={setRatingInp}
        />
          <MyInput
          labelText={"Image URl"}
          myValue={imageInp}
          mySetValueChange={setimageInp}
          type={"text"}
        />
    
    
    
        <div className="flex justify-end">
          <button
            onClick={onCreate}
            className="px-4 py-2 rounded bg-indigo-700 text-white"
          >
            Create
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default StadiumCreate;
