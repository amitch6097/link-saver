import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import useLinks from "../hooks/useLinks";
import useNavigation from '../hooks/useNavigation';
import { HomeButton } from "../components/HomeButton";
import { SaveButton } from "../components/SaveButton";
import { LinkRow } from "../components/LinkRow";

export function LinkList() {
  const {
    idle,
    links,
    label,
    add,
    remove,
    setLabel,
    setLinkLabel,
    setLinkLink,
    save
  } = useLinks();

  const {
      goHome
  } = useNavigation();

  const onChangeLabel = e => {
    setLabel(e.target.value);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <HomeButton onClick={goHome} />
        <TextField
          id="link-list-title"
          label="Name of Link List"
          value={label}
          variant="outlined"
          onChange={onChangeLabel}
        />{" "}
        <SaveButton saving={idle} onClick={save} />
      </Grid>

      {links.map((link, index) => {
        const onAdd = () => add(index);
        const onRemove = () => remove(index);
        const onChangeLinkLink = (link: string) => setLinkLink(index, link);
        const onChangeLinkLabel = (label: string) => setLinkLabel(index, label);
        return (
          <LinkRow
            withRemove={!(links.length === 1)}
            onAdd={onAdd}
            onRemove={onRemove}
            onChangeLabel={onChangeLinkLabel}
            onChangeLink={onChangeLinkLink}
            key={link.id}
            {...link}
          />
        );
      })}
    </Grid>
  );
}
