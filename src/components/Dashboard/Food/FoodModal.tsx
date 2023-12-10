import {
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import createFood from "@/app/actions/food/createFood";

interface IProps {
  value: string;
  meal: string;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
  flag: boolean;
}

const FoodModal = ({ flag, setFlag, value, meal }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<FoodResult | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.calorieninjas.com/v1/nutrition?query=${query}`;
  const config = {
    headers: {
      "X-Api-Key": "EsPjqbIcOgeWooBUAGJeQw==KIVvSyvnMfkGK7UR",
    },
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFlag(!flag);
    setResult(null);
  };

  const closeAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, config);
      setResult(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    if (result?.items) {
      for (const item of result.items) {
        await createFood(
          value,
          item.name,
          meal,
          item.serving_size_g,
          item.calories,
          item.carbohydrates_total_g,
          item.protein_g,
          item.fat_total_g,
          item.fat_saturated_g,
          item.sugar_g,
          item.sodium_mg,
          item.fiber_g,
          item.cholesterol_mg
        );
      }
      handleClose();
    } else setOpenAlert(true);
  };

  return (
    <div>
      <div
        className="bg-[rgb(33,43,54)] text-white px-4 py-2 font-bold border-transparent rounded-md w-fit ml-3 cursor-pointer"
        onClick={handleOpen}
      >
        Add food
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] focus:outline-none">
          <div className="box-shadow flex flex-col gap-5 border-[--grey] rounded-lg bg-white px-10 lg:px-16 py-7">
            <span className="text-lg capitalize">
              Add Food To {meal} {value}
            </span>
            <div className="flex flex-row items-center gap-3">
              <input
                className="px-3 py-2 w-80 border rounded-lg"
                type="text"
                placeholder="E.g 1 egg, 200g rice"
                onChange={(e) => setQuery(e.target.value)}
              />
              <div
                className="bg-[rgb(33,43,54)] text-white px-4 py-2 font-bold border-transparent rounded-md cursor-pointer"
                onClick={() => handleSearch()}
              >
                Search
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Serving size</TableCell>
                    <TableCell>Calories</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!loading ? (
                    result?.items.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell className="capitalize">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.serving_size_g}g</TableCell>
                        <TableCell>{item.calories}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <span className="ml-5">loading...</span>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="flex flex-row justify-end gap-3">
              <div
                className="bg-[rgb(33,43,54)] text-white px-4 py-2 font-bold border-transparent rounded-md cursor-pointer"
                onClick={handleAdd}
              >
                Add
              </div>
              <div
                className="bg-[rgb(33,43,54)] text-white px-4 py-2 font-bold border-transparent rounded-md cursor-pointer"
                onClick={handleClose}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={closeAlert}
      >
        <Alert severity="error" onClose={closeAlert} sx={{ width: "100%" }}>
          Nothing to add!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FoodModal;
