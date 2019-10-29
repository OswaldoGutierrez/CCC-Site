import {
  faPhone,
  faEnvelope,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(faPhone, faEnvelope, faMapMarkedAlt);
};

export default Icons;
