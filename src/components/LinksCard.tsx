import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import { Add } from "../components/Add";
import { Remove } from "../components/Remove";

export function LinksCard({
  label,
  onChangeLabel,
  onClick,
  withRemove,
  onRemove
}: {
  label: string;
  onChangeLabel: (label: string) => void;
  onRemove: () => void;
  onClick: () => void;
  withRemove: boolean;
}) {
  const changeLabel = e => {
    onChangeLabel(e.target.value);
  };

  return (
    <Card style={{ width: 275 }} variant="outlined">
              <CardActionArea>

      <CardContent>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://static.slickdealscdn.com/attachment/3/5/3/1/8/3/4/200x200/8877326.thumb"
          title="Contemplative Reptile"
        />
        <TextField value={label} onChange={changeLabel} />
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      </CardActionArea>

      <CardActions>
        {withRemove && <Remove onClick={onRemove} />}
        {withRemove && <Remove onClick={onRemove} />}
      </CardActions>
    </Card>
  );
}
