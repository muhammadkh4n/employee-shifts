class Week
  include Mongoid::Document

  field :starting_date, type: String
  field :shops, type: Array
  field :_id, type: String, default: ->{ self.starting_date }

  validates_presence_of :starting_date, :shops

  # index({starting_date: 1}, {unique: true, drop_dups: true})
end
