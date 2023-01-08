import { CommonOption } from "~/components/types/CommonOption";
import { ButtonOption } from "~/components/types/ButtonEmbed/ButtonOption";

export type TwitterMentionButtonProps = {
  /**
   * The screen_name of a user to be mentioned.
   */
  screenName: string;

  /**
   * Additional options
   */
  options?: CommonOption & ButtonOption;

  /**
   * Placeholder while tweet is loading
   */
  placeholder?: ReactNode | string;

  /**
   * Function to execute after load, return html element
   */
  onLoad?: (element: HTMLDivElement) => void;
};
