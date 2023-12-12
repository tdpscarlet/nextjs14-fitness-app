import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface IProps {
  food?: Food[] | null;
  meal: string;
}

const FoodTable = ({ food, meal }: IProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Serving size (g)</TableCell>
            <TableCell>Calories (kcal)</TableCell>
            <TableCell>Carbs (g)</TableCell>
            <TableCell>Fat (g)</TableCell>
            <TableCell>Protein (g)</TableCell>
            <TableCell>Sodium (mg)</TableCell>
            <TableCell>Sugar (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {food?.length &&
            food
              .filter((item) => {
                return item.meal.includes(meal);
              })
              .map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="capitalize">{item.name}</TableCell>
                  <TableCell>{item.servingSize}</TableCell>
                  <TableCell>{item.calo}</TableCell>
                  <TableCell>{item.carb}</TableCell>
                  <TableCell>{item.totalFat}</TableCell>
                  <TableCell>{item.protein}</TableCell>
                  <TableCell>{item.sodium}</TableCell>
                  <TableCell>{item.sugar}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FoodTable;
