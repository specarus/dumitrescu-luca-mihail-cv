const ContactItem = ({ icon, content }) => {
  return (
    <li className="flex items-center justify-start mobile:gap-[5px] tablet:gap-2">
      <span className="text-white">{icon}</span>
      <p className="mobile:text-3xs tablet:text-xs laptop:text-sm">{content}</p>
    </li>
  );
};

export default ContactItem;
