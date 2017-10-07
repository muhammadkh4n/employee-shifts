class Week
  include Mongoid::Document

  field :starting_date, type: String
  field :shops, type: Array

  validates_presence_of :starting_date, :shops
end
