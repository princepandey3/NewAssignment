import dotenv from "dotenv";
import connectDB from "./config/database.js";
import User from "./models/User.js";
import Lead from "./models/Lead.js";
import Task from "./models/Task.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Lead.deleteMany();
    await Task.deleteMany();

    const users = await User.create([
      {
        name: "Rohan",
        email: "admin@124.com",
        password: "admin123",
        role: "admin",
      },
      {
        name: "Sohan Kumar",
        email: "user@345.com",
        password: "user123",
        role: "user",
      },
    ]);

    await Lead.create([
      {
        name: "ACT Business Solutions",
        email: "contact@acme.com",
        phone: "+91 987 654 3210",
        company: "ACT Business Solutions",
        status: "new",
        value: 50000,
      },
      {
        name: "Tech Solutions Inc",
        email: "info@techsolutions.com",
        phone: "+91 234 567 8901",
        company: "Tech Solutions",
        status: "contacted",
        value: 75000,
      },
      {
        name: "Global Enterprises",
        email: "hello@global.com",
        phone: "+1 234 567 8902",
        company: "Global Ent",
        status: "qualified",
        value: 100000,
      },
      {
        name: "Digital Marketing Co",
        email: "contact@digitalmarketing.com",
        phone: "+91 234 567 8903",
        company: "Digital Marketing",
        status: "new",
        value: 30000,
      },
      {
        name: "StartUp Innovators",
        email: "team@startup.com",
        phone: "+91 234 567 8904",
        company: "StartUp Inc",
        status: "won",
        value: 120000,
      },
    ]);

    await Task.create([
      {
        title: "Follow up with ACT Business Solutions",
        description: "Send proposal and schedule demo",
        status: "pending",
        priority: "high",
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        assignedTo: users[0]._id,
      },
      {
        title: "Prepare quarterly sales report",
        description: "Compile all sales data for Q4",
        status: "in-progress",
        priority: "medium",
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        assignedTo: users[1]._id,
      },
      {
        title: "Update CRM database",
        description: "Clean up old leads and update contact info",
        status: "pending",
        priority: "low",
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        assignedTo: users[0]._id,
      },
      {
        title: "Call Tech Solutions",
        description: "Discuss pricing and contract terms",
        status: "completed",
        priority: "high",
        dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        assignedTo: users[1]._id,
      },
      {
        title: "Send invoice to Global Enterprises",
        description: "Invoice for completed project",
        status: "in-progress",
        priority: "high",
        dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        assignedTo: users[0]._id,
      },
    ]);

    console.log("Data seeded successfully!");
    console.log("\nTest Credentials:");
    console.log("Admin - Email: admin@124.com | Password: admin123");
    console.log("User - Email: user@345.com | Password: user123");

    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
