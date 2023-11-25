import { PromptCard } from "./PromptCard";

export const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}</span> Profile
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEditClick={() => handleEdit && handleEdit(post)}
            handleDeleteClick={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};
