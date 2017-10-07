class Slot
  include Mongoid::Document
  include Mongoid::Timestamps

  field :timing, type: String

  validates_presence_of :timing
end
