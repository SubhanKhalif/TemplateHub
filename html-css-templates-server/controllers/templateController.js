import Template from '../models/Template.js';

export const getAllTemplates = async (req, res) => {
  const templates = await Template.find();
  res.json(templates);
};

export const getFeaturedTemplates = async (req, res) => {
  try {
    const featuredTemplates = await Template.find({ featured: true });
    res.json(featuredTemplates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTemplate = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    // Increment userViews when template is accessed
    template.userViews += 1;
    await template.save();
    res.json(template);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addTemplate = async (req, res) => {
  const newTemplate = new Template({
    ...req.body,
    totalLikes: 0, // Initialize totalLikes
    userViews: 0 // Initialize userViews
  });
  await newTemplate.save();
  res.json(newTemplate);
};

export const updateTemplate = async (req, res) => {
  try {
    const updated = await Template.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTemplate = async (req, res) => {
  try {
    const deleted = await Template.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const likeTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Template.findByIdAndUpdate(
      id,
      { $inc: { totalLikes: 1 } },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Template not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
