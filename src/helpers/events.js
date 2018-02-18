import moment from "moment/moment";

/**
 * Receive an event and return the actual
 * date of this event. So when it takes place
 * instead of start date show current date.
 *
 * @param event
 * @returns {number}
 */
export const getEventActualDate = ({since, until}) => {
  const now = moment().utcOffset(0).unix();

  return since < now && until > now ? now : since;
};
