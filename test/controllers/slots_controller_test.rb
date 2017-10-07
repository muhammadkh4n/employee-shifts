require 'test_helper'

class SlotsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @slot = slots(:one)
  end

  test "should get index" do
    get slots_url, as: :json
    assert_response :success
  end

  test "should create slot" do
    assert_difference('Slot.count') do
      post slots_url, params: { slot: { time: @slot.time } }, as: :json
    end

    assert_response 201
  end

  test "should show slot" do
    get slot_url(@slot), as: :json
    assert_response :success
  end

  test "should update slot" do
    patch slot_url(@slot), params: { slot: { time: @slot.time } }, as: :json
    assert_response 200
  end

  test "should destroy slot" do
    assert_difference('Slot.count', -1) do
      delete slot_url(@slot), as: :json
    end

    assert_response 204
  end
end
