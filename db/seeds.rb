# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Week.destroy_all
Shop.destroy_all
Staff.destroy_all
Slot.destroy_all

# week = Week.create!({starting_date: Date.new})

# shops = []
# [
#   {name: 'Ebay co'},
#   {name: 'Amazon co'},
#   {name: 'Newegg'},
#   {name: 'Green valley'}
# ].each do |shop|
#   shops << Shop.new(shop)
# end

# week.shops = shops

# staffs = []
# [
#   {name: 'khan', title: 'sweeper'},
#   {name: 'ahmed', title: 'harlem'},
#   {name: 'john', title: 'depp'}
# ].each do |staff|
#   staffs << Staff.new(staff)
# end

# shops.each do |shop|
#   shop.staffs = staffs
# end

Shop.create! [
{name: 'Ebay co'},
{name: 'Amazon co'},
{name: 'Newegg'},
{name: 'Green valley'}
]

Staff.create! [
{name: 'Khan - HRM'},
{name: 'Ahmed - CEO'},
{name: 'John - STO'}
]

Slot.create! [
{timing: '2-9'},
{timing: '5-10'},
{timing: '9-5'}
]

Week.create! [{
  starting_date: '40-9-2017',
  shops: [
    {
      name: 'Ebay co',
      slots: ['2-9', '5-10', '', '9-5', '', '', ''],
      staffs: [
        {
          name: 'Khan - HRM',
          slots: ['2-9', '5-10', '', '9-5', '', '', '']
        },
        {
          name: 'Ahmed - CEO',
          slots: ['2-9', '5-10', '', '9-5', '', '', '']
        }
      ]
    },
    {
      name: 'Amazon co',
      slots: ['2-9', '5-10', '', '9-5', '', '', ''],
      staffs: [
        {
          name: 'Khan - HRM',
          slots: ['2-9', '5-10', '', '9-5', '', '', '']
        },
        {
          name: 'Ahmed - CEO',
          slots: ['2-9', '5-10', '', '9-5', '', '', '']
        }
      ]
    }
  ]
}]
