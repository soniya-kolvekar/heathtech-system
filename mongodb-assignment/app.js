const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://soniyaa:Oer97W8aw5kZI4Y2@cluster0.ktmixir.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db("HostelDB");


    const students = db.collection("Students");
    const hostels = db.collection("Hostels");
    const rooms = db.collection("Rooms");
    const allocations = db.collection("Allocations");
    const complaints = db.collection("Complaints");
    const visitors = db.collection("Visitors");
    const attendance = db.collection("Attendance");


    await students.insertMany([
      { student_id: 1, name: "Aarav", course: "CSE", year: 2 },
      { student_id: 2, name: "Riya", course: "ECE", year: 1 },
      { student_id: 3, name: "Karan", course: "ME", year: 3 },
      { student_id: 4, name: "Sneha", course: "CSE", year: 4 },
      { student_id: 5, name: "Rahul", course: "EEE", year: 2 },
      { student_id: 6, name: "Priya", course: "IT", year: 1 }
    ]);

    await hostels.insertMany([
      { hostel_id: 1, hostel_name: "Block A", location: "North", capacity: 100 },
      { hostel_id: 2, hostel_name: "Block B", location: "South", capacity: 120 },
      { hostel_id: 3, hostel_name: "Block C", location: "East", capacity: 80 },
      { hostel_id: 4, hostel_name: "Block D", location: "West", capacity: 90 },
      { hostel_id: 5, hostel_name: "Block E", location: "North", capacity: 110 },
      { hostel_id: 6, hostel_name: "Block F", location: "South", capacity: 95 }
    ]);

    await rooms.insertMany([
      { room_id: 1, hostel_id: 1, room_number: "A101", capacity: 1 },
      { room_id: 2, hostel_id: 1, room_number: "A102", capacity: 2 },
      { room_id: 3, hostel_id: 2, room_number: "B201", capacity: 3 },
      { room_id: 4, hostel_id: 2, room_number: "B202", capacity: 2 },
      { room_id: 5, hostel_id: 3, room_number: "C301", capacity: 1 },
      { room_id: 6, hostel_id: 3, room_number: "C302", capacity: 3 }
    ]);

    await allocations.insertMany([
      { student_id: 1, room_id: 1, start_date: "2025-01-01" },
      { student_id: 2, room_id: 2, start_date: "2025-01-01" },
      { student_id: 3, room_id: 3, start_date: "2025-01-01" },
      { student_id: 4, room_id: 4, start_date: "2025-01-01" },
      { student_id: 5, room_id: 5, start_date: "2025-01-01" },
      { student_id: 6, room_id: 6, start_date: "2025-01-01" }
    ]);

    await complaints.insertMany([
      { student_id: 1, description: "Fan not working", status: "Pending" },
      { student_id: 2, description: "Water leakage", status: "Resolved" },
      { student_id: 3, description: "WiFi issue", status: "Pending" },
      { student_id: 4, description: "Light problem", status: "In Progress" },
      { student_id: 5, description: "Broken chair", status: "Pending" },
      { student_id: 6, description: "Bathroom issue", status: "Resolved" }
    ]);

    await visitors.insertMany([
      { student_id: 1, visitor_name: "Father", visit_date: "2025-03-01" },
      { student_id: 2, visitor_name: "Mother", visit_date: "2025-03-02" },
      { student_id: 3, visitor_name: "Friend", visit_date: "2025-03-03" },
      { student_id: 4, visitor_name: "Brother", visit_date: "2025-03-04" },
      { student_id: 5, visitor_name: "Guardian", visit_date: "2025-03-05" },
      { student_id: 6, visitor_name: "Friend", visit_date: "2025-03-06" }
    ]);

    await attendance.insertMany([
      { student_id: 1, date: "2025-04-01", status: "Present" },
      { student_id: 2, date: "2025-04-01", status: "Absent" },
      { student_id: 3, date: "2025-04-01", status: "Present" },
      { student_id: 4, date: "2025-04-01", status: "Present" },
      { student_id: 5, date: "2025-04-01", status: "Absent" },
      { student_id: 6, date: "2025-04-01", status: "Present" }
    ]);

    console.log("All data inserted");

    console.log("\nStudents:");
    console.log(await students.find().toArray());

    console.log("\nHostels:");
    console.log(await hostels.find().toArray());

    console.log("\nRooms with capacity > 1:");
    console.log(await rooms.find({ capacity: { $gt: 1 }}).toArray());

    console.log("\nAllocations:");
    console.log(await allocations.find().toArray());

    console.log("\nPending Complaints:");
    console.log(await complaints.find({ status: "Pending" }).toArray());

    console.log("\nVisitors:");
    console.log(await visitors.find().toArray());

    console.log("\nAttendance:");
    console.log(await attendance.find().toArray());

    console.log("\nTotal Complaints:");
    console.log(await complaints.countDocuments());

    console.log(await students.find({ year: { $gt: 1 }}).toArray());

    console.log(await rooms.find({ capacity: { $lte: 2 }}).toArray());

    console.log(await complaints.find({ status: { $ne: "Resolved" }}).toArray());

    console.log(await students.find({ course: "CSE" }).toArray());

  } finally {
    await client.close();
  }
}

run().catch(console.dir);