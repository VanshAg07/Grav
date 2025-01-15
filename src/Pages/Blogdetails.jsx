import React from "react";
import Nav from "./Nav";
import img from "../img/1.jpg";
import Footer from "./Footer";

const BlogDetails = () => {
  // Static blog data with dummy content
  const blog = {
    blogBackgroundImage: "https://via.placeholder.com/1200x800", // Dummy background image
    blogName: "Dummy Blog Name",
    blogTitle: "Static Blog Title",
    blogDescription:
      "This is a static description of the blog. It provides an overview of the blog content and sets the tone for the readers.",
    blogHeading: [
      {
        _id: "1",
        headingTitle: "First Static Heading",
        headingDescription:
          "This is a description for the first static heading. It provides details about this section.",
        points: [
          {
            _id: "1.1",
            pointTitle: "Point 1 under Heading 1",
            pointDescription:
              "This is the description for the first point under the first heading.",
          },
          {
            _id: "1.2",
            pointTitle: "Point 2 under Heading 1",
            pointDescription:
              "This is the description for the second point under the first heading.",
          },
        ],
      },
      {
        _id: "2",
        headingTitle: "Second Static Heading",
        headingDescription:
          "This is a description for the second static heading. It provides insights about this section.",
        points: [
          {
            _id: "2.1",
            pointTitle: "Point 1 under Heading 2",
            pointDescription:
              "This is the description for the first point under the second heading.",
          },
        ],
      },
    ],
    blogImages: [
      img, // Dummy image for Heading 1
      img, // Dummy image for Heading 2
    ],
  };

  return (
    <>
      <Nav />

      {/* Background Image with Blog Title */}
      <div className="relative w-full h-[80vh] mb-8">
        <img
          src={img}
          alt={blog.blogTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute md:top-36 top-20 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black font-semibold py-2 px-4 rounded-full">
          {blog.blogName}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-2xl font-semibold py-3 px-8 rounded-lg">
          {blog.blogTitle}
        </div>
      </div>

      {/* Blog Description */}
      <div className="w-[80%] mx-auto bg-[#03346e] p-6 rounded-lg shadow-lg mb-10">
        <p className="text-lg text-white font-medium leading-relaxed">
          {blog.blogDescription}
        </p>
      </div>

      {/* Blog Content with Images, Headings, and Points */}
      {blog.blogHeading.map((heading, index) => (
        <div key={heading._id} className="w-[80%] mx-auto mb-12">
          {/* Display image for each heading */}
          {blog.blogImages[index] && (
            <img
              src={img}
              alt={`Heading image ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg mb-6 shadow-md"
            />
          )}
          {/* Heading and Points */}
          <h2 className="text-3xl font-bold text-[#03346e] mb-4">
            {heading.headingTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {heading.headingDescription}
          </p>
          {heading.points.map((point) => (
            <div
              key={point._id}
              className="mb-4 pl-4 border-l-4 border-[#03346e]"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {point.pointTitle}
              </h3>
              <p className="text-gray-600">{point.pointDescription}</p>
            </div>
          ))}
        </div>
      ))}

      <Footer />
    </>
  );
};

export default BlogDetails;
