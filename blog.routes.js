import express from "express";
import { title } from "process";

const router = express.Router();

let blogList = [
  {
    id: 1,
    title: "trekking",
    description: "it about the trekking.",
    category: "paragraph",
  },
  {
    id: 2,
    title: "hiking",
    description: "it about the hiking.",
    category: "paragraph",
  },
];

// get all blog list
router.get("/blog/list", (req, res) => {
  return res.status(200).send(blogList);
});

// add blog
router.post("/blog/add", (req, res) => {
  const blogDataLength = blogList.length;
  const newBlog = req.body;

  blogList.push({ id: blogDataLength + 1, ...newBlog });

  return res.status(201).send({ message: "Blog is added successfully." });
});

// router.get("/blog/list/:id", (req, res) => {
//   return res.status(200).send(blogList);
// });

//get movie detail
router.get("/blog/detail/:id", (req, res) => {
  // extract movie id from params
  const blogId = +req.params.id;

  // check if movie with provided id exists
  const requiredblog = blogList.find((item, index, self) => {
    if (item.id === blogId) {
      return item;
    }
  });

  // if not movie, throw error

  if (!requiredblog) {
    return res.status(404).send({ message: "blog does not exist." });
  }

  // return response with movie details
  return res.status(200).send(requiredblog);
});

// edit blog
router.put("/blog/update/:id", (req, res) => {
  // extract id from params

  const blogIdToBeEdited = Number(req.params.id);

  // extract new values from req.body
  const newValues = req.body;

  // check if movie with provided id exists
  const requiredblog = blogList.find((item, index, self) => {
    return item.id === blogIdToBeEdited;
  });

  // if not blog, throw error
  if (!requiredblog) {
    return res.status(404).send({ message: "Blog does not exist." });
  }

  // edit blog
  const updatedblogList = blogList.map((item, index, self) => {
    if (item.id === blogIdToBeEdited) {
      return {
        id: requiredblog.id,
        ...newValues,
      };
    } else {
      return item;
    }
  });

  blogList = structuredClone(updatedblogList);

  // send appropriate response
  return res.status(200).send({ message: "Blog is updated successfully." });
});

export default router;
