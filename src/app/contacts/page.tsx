"use client"

import { useState } from "react"

import {
  Search,
  Users,
  Plus,
  Pencil,
  Trash2,
  Check,
} from "lucide-react"

import Sidebar from "@/components/ui/layout/sidebar"

const initialContacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@company.com",
    company: "Growth Labs",
    status: "Active",
    initial: "S",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael@startup.io",
    company: "Nova AI",
    status: "Lead",
    initial: "M",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma@agency.com",
    company: "Creative Flow",
    status: "Inactive",
    initial: "E",
  },
]

export default function ContactsPage() {

  const [showModal, setShowModal] = useState(false)

  const [contactsData, setContactsData] = useState(initialContacts)

  const [editingId, setEditingId] = useState<number | null>(null)

  const [editedContact, setEditedContact] = useState({
    name: "",
    email: "",
    company: "",
    status: "",
  })

  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    company: "",
    status: "Active",
  })

  const handleAddContact = () => {

    if (
      !newContact.name.trim() ||
      !newContact.email.trim() ||
      !newContact.company.trim()
    ) {
      alert("Please fill all fields")
      return
    }

    const contactToAdd = {
      id: Date.now(),
      ...newContact,
      initial: newContact.name.charAt(0).toUpperCase(),
    }

    setContactsData([
      ...contactsData,
      contactToAdd,
    ])

    setNewContact({
      name: "",
      email: "",
      company: "",
      status: "Active",
    })

    setShowModal(false)
  }

  const handleDelete = (id: number) => {
    setContactsData(
      contactsData.filter(contact => contact.id !== id)
    )
  }

  const handleEdit = (contact: any) => {

    setEditingId(contact.id)

    setEditedContact({
      name: contact.name,
      email: contact.email,
      company: contact.company,
      status: contact.status,
    })
  }

  const handleSaveEdit = (id: number) => {

    if (
      !editedContact.name.trim() ||
      !editedContact.email.trim() ||
      !editedContact.company.trim()
    ) {
      alert("Please fill all fields")
      return
    }

    setContactsData(
      contactsData.map(contact =>
        contact.id === id
          ? {
              ...contact,
              ...editedContact,
              initial: editedContact.name.charAt(0).toUpperCase(),
            }
          : contact
      )
    )

    setEditingId(null)
  }

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-zinc-100 dark:bg-zinc-950 p-8 transition-all duration-300">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
              Contacts
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-lg">
              Manage leads and subscriber lists
            </p>

          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-2xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2 w-fit"
          >

            <Plus size={20} />

            Add Contact

          </button>

        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">

          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div className="relative w-full lg:max-w-md">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              />

              <input
                placeholder="Search contacts..."
                className="w-full bg-zinc-100 dark:bg-zinc-950 rounded-2xl py-4 pl-12 pr-4 outline-none border border-transparent focus:border-blue-500 transition-all text-zinc-900 dark:text-white"
              />

            </div>

            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">

              <Users size={20} />

              <span className="font-medium">
                {contactsData.length} Contacts
              </span>

            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-zinc-50 dark:bg-zinc-950">

                <tr className="text-left text-zinc-500 dark:text-zinc-400 text-sm">

                  <th className="px-6 py-4 font-medium">
                    Contact
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Email
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Company
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Status
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {contactsData.map((contact) => (

                  <tr
                    key={contact.id}
                    className="border-t border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-md">
                          {contact.initial}
                        </div>

                        <div>

                          {editingId === contact.id ? (

                            <input
                              value={editedContact.name}
                              onChange={(e) =>
                                setEditedContact({
                                  ...editedContact,
                                  name: e.target.value,
                                })
                              }
                              className="bg-zinc-100 dark:bg-zinc-950 px-3 py-2 rounded-xl outline-none text-zinc-900 dark:text-white"
                            />

                          ) : (

                            <h3 className="font-semibold text-zinc-900 dark:text-white">
                              {contact.name}
                            </h3>

                          )}

                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                            Subscriber
                          </p>

                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">

                      {editingId === contact.id ? (

                        <input
                          value={editedContact.email}
                          onChange={(e) =>
                            setEditedContact({
                              ...editedContact,
                              email: e.target.value,
                            })
                          }
                          className="bg-zinc-100 dark:bg-zinc-950 px-3 py-2 rounded-xl outline-none"
                        />

                      ) : (
                        contact.email
                      )}

                    </td>

                    <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">

                      {editingId === contact.id ? (

                        <input
                          value={editedContact.company}
                          onChange={(e) =>
                            setEditedContact({
                              ...editedContact,
                              company: e.target.value,
                            })
                          }
                          className="bg-zinc-100 dark:bg-zinc-950 px-3 py-2 rounded-xl outline-none"
                        />

                      ) : (
                        contact.company
                      )}

                    </td>

                    <td className="px-6 py-5">

                      <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm">

                        {contact.status}

                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        {editingId === contact.id ? (

                          <button
                            onClick={() => handleSaveEdit(contact.id)}
                            className="p-2 rounded-xl bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-all"
                          >
                            <Check size={18} />
                          </button>

                        ) : (

                          <button
                            onClick={() => handleEdit(contact)}
                            className="p-2 rounded-xl bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-all"
                          >
                            <Pencil size={18} />
                          </button>

                        )}

                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="p-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {showModal && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

            <div className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-2xl">

              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                Add Contact
              </h2>

              <div className="space-y-5">

                <input
                  placeholder="Full Name"
                  value={newContact.name}
                  onChange={(e) =>
                    setNewContact({
                      ...newContact,
                      name: e.target.value,
                    })
                  }
                  className="w-full bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  placeholder="Email Address"
                  value={newContact.email}
                  onChange={(e) =>
                    setNewContact({
                      ...newContact,
                      email: e.target.value,
                    })
                  }
                  className="w-full bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  placeholder="Company"
                  value={newContact.company}
                  onChange={(e) =>
                    setNewContact({
                      ...newContact,
                      company: e.target.value,
                    })
                  }
                  className="w-full bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white rounded-2xl px-5 py-4 outline-none"
                />

              </div>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white py-4 rounded-2xl font-semibold"
                >
                  Cancel
                </button>

                <button
                  onClick={handleAddContact}
                  className="flex-1 bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-semibold"
                >
                  Save Contact
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  )
}