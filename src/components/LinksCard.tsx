import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import CreateIcon from "@material-ui/icons/Create";
import { Add } from "../components/Add";


export interface ILinksCardConfig {
    withClick?: boolean;
    withEdit?: boolean;
    withRemove?: boolean;
}

export interface ILinksCardProps {
    label: string;
    onChangeLabel: (label: string) => void;
    onClick: () => void;
    onRemove?: () => void;
    onEdit?: () => void;
}

export function LinksCard({
  label,
  onChangeLabel,
  onRemove,
  onEdit,
  onClick,
  withRemove = false,
  withEdit = false,
  withClick = false
}: ILinksCardProps & ILinksCardConfig) {
  const changeLabel = e => {
    onChangeLabel(e.target.value);
  };

  return (
    <Card style={{ width: 275 }} variant="outlined">
      <CardActionArea onClick={onClick} disabled={!withClick}>
        <CardContent>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://static.slickdealscdn.com/attachment/3/5/3/1/8/3/4/200x200/8877326.thumb"
            title="Contemplative Reptile"
          />
          <Typography gutterBottom variant="h5" component="h2">
            {label}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {withRemove && (
          <IconButton onClick={onRemove} aria-label="remove link">
            <ClearIcon />
          </IconButton>
        )}
        {withEdit && (
          <IconButton onClick={onEdit} aria-label="edit link">
            <CreateIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
