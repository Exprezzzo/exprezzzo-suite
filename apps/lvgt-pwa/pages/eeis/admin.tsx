import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { addVendor, getVendors, updateVendor, deleteVendor, Vendor } from '../../services/vendorService';

const AdminDashboard = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [newVendor, setNewVendor] = useState<Omit<Vendor, 'id'>>({
    name: '',
    contactEmail: '',
    phone: '',
    address: '',
  });
  const [editingVendor, setEditingVendor] = useState<Vendor | null>(null);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const vendorsList = await getVendors();
      setVendors(vendorsList);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const handleAddVendor = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addVendor(newVendor);
      setNewVendor({
        name: '',
        contactEmail: '',
        phone: '',
        address: '',
      });
      fetchVendors();
    } catch (error) {
      console.error("Error adding vendor:", error);
    }
  };

  const handleUpdateVendor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingVendor && editingVendor.id) {
      try {
        await updateVendor(editingVendor.id, editingVendor);
        setEditingVendor(null);
        fetchVendors();
      } catch (error) {
        console.error("Error updating vendor:", error);
      }
    }
  };

  const handleDeleteVendor = async (id: string) => {
    try {
      await deleteVendor(id);
      fetchVendors();
    } catch (error) {
      console.error("Error deleting vendor:", error);
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome to the private admin section.</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Add New Vendor</h2>
        <form onSubmit={handleAddVendor} className="bg-white p-4 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={newVendor.name}
              onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
            <input
              type="email"
              id="contactEmail"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={newVendor.contactEmail}
              onChange={(e) => setNewVendor({ ...newVendor, contactEmail: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={newVendor.phone}
              onChange={(e) => setNewVendor({ ...newVendor, phone: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={newVendor.address}
              onChange={(e) => setNewVendor({ ...newVendor, address: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Vendor
          </button>
        </form>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Existing Vendors</h2>
        {vendors.length === 0 ? (
          <p>No vendors found.</p>
        ) : (
          <div className="bg-white p-4 rounded shadow-md">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="border-b border-gray-200 py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{vendor.name}</h3>
                  <p className="text-gray-600">{vendor.contactEmail}</p>
                  <p className="text-gray-600">{vendor.phone}</p>
                  <p className="text-gray-600">{vendor.address}</p>
                </div>
                <div>
                  <button
                    onClick={() => setEditingVendor(vendor)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => vendor.id && handleDeleteVendor(vendor.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {editingVendor && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4">Edit Vendor</h2>
            <form onSubmit={handleUpdateVendor}>
              <div className="mb-4">
                <label htmlFor="editName" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="editName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={editingVendor.name}
                  onChange={(e) => setEditingVendor({ ...editingVendor, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editContactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
                <input
                  type="email"
                  id="editContactEmail"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={editingVendor.contactEmail}
                  onChange={(e) => setEditingVendor({ ...editingVendor, contactEmail: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editPhone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="editPhone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={editingVendor.phone}
                  onChange={(e) => setEditingVendor({ ...editingVendor, phone: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editAddress" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="editAddress"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={editingVendor.address}
                  onChange={(e) => setEditingVendor({ ...editingVendor, address: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setEditingVendor(null)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update Vendor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;